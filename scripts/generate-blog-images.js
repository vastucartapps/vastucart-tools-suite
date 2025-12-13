/**
 * Blog Image Generation Script
 *
 * Generates 160 images for 32 blog posts using the local Flux API
 *
 * Usage: node scripts/generate-blog-images.js
 *
 * API: http://175.111.130.242:6978
 */

const fs = require('fs');
const path = require('path');
const https = require('http'); // Using http since it's not https

// ============== CONFIGURATION ==============
const API_BASE = 'http://175.111.130.242:6978';
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'blog');
const SAMPLES_DIR = path.join(__dirname, '..', 'public', 'samples');

// Style suffix to append to all prompts
const STYLE_SUFFIX = ', teal and saffron color scheme, mystical spiritual vedic aesthetic, modern minimalist divine design, clean geometric shapes, soft ethereal glow, professional blog header image, high quality digital art';

// API generation parameters
const GENERATION_PARAMS = {
  width: 1200,
  height: 800,
  steps: 25,
  cfg: 1,
  checkpoint_name: 'flux1-krea-dev_fp8_scaled.safetensors',
  negative_prompt: 'blurry, distorted, ugly, deformed, text errors, bad typography, watermark, signature, low quality, amateur, pixelated, noisy, grainy',
  sampler_name: 'euler',
  scheduler: 'normal',
  shift: 3.1,
  lora_strength: 1,
  seed: 0,
  auto_adjust: true
};

// Post slug mapping (tool folder name -> blog slug)
const POST_SLUGS = {
  1: { folder: 'kundli', slug: 'free-kundli-online-janam-kundali-calculator' },
  2: { folder: 'nakshatra', slug: 'nakshatra-calculator-birth-star-meanings' },
  3: { folder: 'moon-sign', slug: 'moon-sign-calculator-emotional-inner-self' },
  4: { folder: 'lagna', slug: 'lagna-calculator-ascendant-sign-meaning' },
  5: { folder: 'mahadasha', slug: 'mahadasha-calculator-timing-life-phases' },
  6: { folder: 'manglik', slug: 'manglik-dosha-effects-remedies' },
  7: { folder: 'sade-sati', slug: 'sade-sati-period-guide' },
  8: { folder: 'pitra-dosha', slug: 'pitra-dosha-calculator-ancestral-karma' },
  9: { folder: 'raj-yoga', slug: 'raj-yoga-calculator-divine-fortune' },
  10: { folder: 'kalsarp-dosha', slug: 'kalsarp-dosha-serpent-blessing' },
  11: { folder: 'gemstone-recommender', slug: 'gemstone-recommendation-by-date-of-birth' },
  12: { folder: 'marriage-matching', slug: 'marriage-matching-kundli-compatibility' },
  13: { folder: 'marriage-timing-predictor', slug: 'marriage-timing-predictor-when-marry' },
  14: { folder: 'muhurat-finder', slug: 'muhurat-finder-auspicious-time' },
  15: { folder: 'career-predictor', slug: 'career-predictor-job-business' },
  16: { folder: 'wealth-money-predictor', slug: 'wealth-money-predictor-financial-destiny' },
  17: { folder: 'life-path-number', slug: 'life-path-number-calculator-meaning' },
  18: { folder: 'destiny-number', slug: 'destiny-number-meaning-calculator' },
  19: { folder: 'lucky-number', slug: 'lucky-number-calculator-personal' },
  20: { folder: 'chaldean-numerology', slug: 'chaldean-numerology-vs-pythagorean' },
  21: { folder: 'lo-shu-grid', slug: 'lo-shu-grid-magic-square' },
  22: { folder: 'bhagyodaya-year', slug: 'bhagyodaya-year-luck-finder' },
  23: { folder: 'lucky-color', slug: 'lucky-color-numerology-chromotherapy' },
  24: { folder: 'lucky-mobile-number', slug: 'lucky-mobile-number-phone-numerology' },
  25: { folder: 'lucky-vehicle-number', slug: 'lucky-vehicle-number-car-numerology' },
  26: { folder: 'lucky-bank-account-number', slug: 'lucky-bank-account-number-numerology' },
  27: { folder: 'house-number', slug: 'house-number-numerology-meaning' },
  28: { folder: 'business-name', slug: 'business-name-numerology-analyzer' },
  29: { folder: 'child-name', slug: 'child-name-numerology-baby-naming' },
  30: { folder: 'name-correction', slug: 'name-correction-numerology-destiny' },
  31: { folder: 'love-compatibility-numerology', slug: 'love-compatibility-numerology-soulmate' },
  32: { folder: 'room-advisor', slug: 'room-advisor-vastu-space' }
};

// ============== UTILITY FUNCTIONS ==============

/**
 * Make HTTP request (works with the local API)
 */
function httpRequest(url, options = {}) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const requestOptions = {
      hostname: urlObj.hostname,
      port: urlObj.port || 80,
      path: urlObj.pathname + urlObj.search,
      method: options.method || 'GET',
      headers: options.headers || {}
    };

    const req = require('http').request(requestOptions, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(data) });
        } catch {
          resolve({ status: res.statusCode, data: data });
        }
      });
    });

    req.on('error', reject);

    if (options.body) {
      req.write(JSON.stringify(options.body));
    }

    req.end();
  });
}

/**
 * Sleep for specified milliseconds
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Parse image specs from markdown file
 */
function parseImageSpecs(content) {
  const images = [];
  const lines = content.split('\n');

  let currentPost = null;
  let inTable = false;

  for (const line of lines) {
    // Detect post header (e.g., "## POST #4: LAGNA CALCULATOR")
    const postMatch = line.match(/##\s*POST\s*#(\d+)/i);
    if (postMatch) {
      currentPost = parseInt(postMatch[1]);
      inTable = false;
      continue;
    }

    // Detect table rows (lines starting with |)
    if (line.trim().startsWith('|') && currentPost) {
      const cells = line.split('|').map(c => c.trim()).filter(c => c);

      // Skip header rows and separator rows
      if (cells[0] === '#' || cells[0] === '---' || cells[0].includes('---')) {
        inTable = true;
        continue;
      }

      // Parse image row: | # | Image Type | Prompt Description | Text Overlay |
      if (inTable && cells.length >= 3) {
        const imageNum = parseInt(cells[0]);
        if (!isNaN(imageNum) && imageNum >= 1 && imageNum <= 5) {
          const imageType = cells[1] || 'hero';
          const prompt = cells[2] || '';
          const textOverlay = cells[3] || '';

          if (prompt && POST_SLUGS[currentPost]) {
            images.push({
              postNum: currentPost,
              imageNum: imageNum,
              folder: POST_SLUGS[currentPost].folder,
              slug: POST_SLUGS[currentPost].slug,
              type: imageType.toLowerCase().replace(/\s+/g, '-'),
              prompt: prompt,
              textOverlay: textOverlay,
              filename: `${imageType.toLowerCase().replace(/\s+/g, '-')}-${imageNum}.webp`
            });
          }
        }
      }
    }
  }

  return images;
}

/**
 * Generate image via API
 */
async function generateImage(prompt) {
  const fullPrompt = prompt + STYLE_SUFFIX;

  console.log(`  Submitting generation request...`);

  const response = await httpRequest(`${API_BASE}/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: {
      prompt: fullPrompt,
      user_id: 'blog-generator',
      ...GENERATION_PARAMS
    }
  });

  if (response.status !== 200) {
    throw new Error(`API error: ${response.status} - ${JSON.stringify(response.data)}`);
  }

  // Extract job_id from response (API returns {job_id: "xxx"} or just the string)
  const jobId = response.data.job_id || response.data.id || response.data;
  console.log(`  Job ID: ${jobId}`);
  return jobId;
}

/**
 * Poll job status until complete
 */
async function waitForCompletion(jobId, maxAttempts = 120) {
  console.log(`  Waiting for job ${jobId}...`);

  for (let i = 0; i < maxAttempts; i++) {
    await sleep(2000); // Poll every 2 seconds

    const response = await httpRequest(`${API_BASE}/status/${jobId}`);

    if (response.status === 200) {
      const status = response.data;

      if (status.status === 'completed' || status.completed) {
        console.log(`  Job completed!`);
        return status;
      }

      if (status.status === 'failed' || status.error) {
        throw new Error(`Job failed: ${status.error || 'Unknown error'}`);
      }

      // Show progress
      if (i % 5 === 0) {
        console.log(`  Still processing... (${i * 2}s)`);
      }
    }
  }

  throw new Error('Job timed out after ' + (maxAttempts * 2) + ' seconds');
}

/**
 * Download and save image
 */
async function saveImage(imageUrl, outputPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(outputPath);

    const protocol = imageUrl.startsWith('https') ? require('https') : require('http');

    protocol.get(imageUrl, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(outputPath, () => {}); // Delete partial file
      reject(err);
    });
  });
}

/**
 * Ensure directory exists
 */
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// ============== MAIN EXECUTION ==============

async function main(testMode = false, postFilter = null) {
  console.log('========================================');
  console.log('Blog Image Generation Script');
  if (testMode) console.log('>>> TEST MODE: Only generating 1 image <<<');
  if (postFilter) console.log(`>>> FILTER: Only Post #${postFilter} <<<`);
  console.log('========================================\n');

  // Collect all image specs
  let allImages = [];

  // Parse image specs from all files
  const specFiles = [
    'blog-all-32-posts-final.md', // Posts 1-3
    'image-specs-part1-posts4-10.md',
    'image-specs-part2-posts11-17.md',
    'image-specs-part3-posts18-25.md',
    'image-specs-part4-posts26-32.md'
  ];

  console.log('Parsing image specifications...\n');

  for (const file of specFiles) {
    const filePath = path.join(SAMPLES_DIR, file);
    if (fs.existsSync(filePath)) {
      console.log(`  Reading ${file}...`);
      const content = fs.readFileSync(filePath, 'utf-8');
      const images = parseImageSpecs(content);
      allImages.push(...images);
      console.log(`    Found ${images.length} images`);
    } else {
      console.log(`  Warning: ${file} not found`);
    }
  }

  // Apply filters
  if (postFilter) {
    allImages = allImages.filter(img => img.postNum === postFilter);
    console.log(`\nFiltered to Post #${postFilter}: ${allImages.length} images`);
  }

  if (testMode && allImages.length > 0) {
    allImages = [allImages[0]];
    console.log(`\nTest mode: Limited to 1 image`);
  }

  console.log(`\nTotal images to generate: ${allImages.length}\n`);

  if (allImages.length === 0) {
    console.log('No images found. Check your spec files or filters.');
    return;
  }

  // Create output directories
  console.log('Creating output directories...');
  ensureDir(OUTPUT_DIR);
  for (const postData of Object.values(POST_SLUGS)) {
    ensureDir(path.join(OUTPUT_DIR, postData.folder));
  }

  // Generate images
  console.log('\n========================================');
  console.log('Starting Image Generation');
  console.log('========================================\n');

  let completed = 0;
  let failed = 0;
  const startTime = Date.now();

  for (const image of allImages) {
    const outputPath = path.join(OUTPUT_DIR, image.folder, image.filename);

    // Skip if already exists
    if (fs.existsSync(outputPath)) {
      console.log(`[${completed + failed + 1}/${allImages.length}] Skipping ${image.folder}/${image.filename} (already exists)`);
      completed++;
      continue;
    }

    console.log(`\n[${completed + failed + 1}/${allImages.length}] Generating: ${image.folder}/${image.filename}`);
    console.log(`  Post #${image.postNum}: ${image.type}`);
    console.log(`  Prompt: ${image.prompt.substring(0, 80)}...`);

    try {
      // Submit generation request
      const jobId = await generateImage(image.prompt);

      // Wait for completion
      const result = await waitForCompletion(jobId);

      // Save image
      if (result.image_url || result.url || result.output) {
        const imageUrl = result.image_url || result.url || result.output;
        console.log(`  Downloading image...`);
        await saveImage(imageUrl, outputPath);
        console.log(`  Saved to: ${outputPath}`);
        completed++;
      } else {
        // If API returns base64, save directly
        if (result.image_base64 || result.base64) {
          const base64Data = result.image_base64 || result.base64;
          const buffer = Buffer.from(base64Data, 'base64');
          fs.writeFileSync(outputPath, buffer);
          console.log(`  Saved to: ${outputPath}`);
          completed++;
        } else {
          console.log(`  Warning: No image URL in response. Result:`, JSON.stringify(result).substring(0, 200));
          failed++;
        }
      }

    } catch (error) {
      console.error(`  ERROR: ${error.message}`);
      failed++;
    }

    // Progress update
    const elapsed = Math.round((Date.now() - startTime) / 1000);
    const avgTime = elapsed / (completed + failed);
    const remaining = Math.round(avgTime * (allImages.length - completed - failed));
    console.log(`  Progress: ${completed} completed, ${failed} failed, ~${Math.round(remaining / 60)} min remaining`);
  }

  // Final summary
  const totalTime = Math.round((Date.now() - startTime) / 1000);
  console.log('\n========================================');
  console.log('Generation Complete!');
  console.log('========================================');
  console.log(`Total: ${allImages.length} images`);
  console.log(`Completed: ${completed}`);
  console.log(`Failed: ${failed}`);
  console.log(`Time: ${Math.round(totalTime / 60)} minutes`);
  console.log(`Output: ${OUTPUT_DIR}`);
}

// ============== CLI HANDLING ==============

const args = process.argv.slice(2);
const isTestMode = args.includes('--test');
const specificPost = args.find(a => a.startsWith('--post='));
const postFilter = specificPost ? parseInt(specificPost.split('=')[1]) : null;

if (args.includes('--help')) {
  console.log(`
Blog Image Generation Script

Usage:
  node scripts/generate-blog-images.js [options]

Options:
  --test        Generate only 1 image to test the API
  --post=N      Generate images only for post #N (e.g., --post=4)
  --help        Show this help message

Examples:
  node scripts/generate-blog-images.js --test
  node scripts/generate-blog-images.js --post=4
  node scripts/generate-blog-images.js
`);
  process.exit(0);
}

// Run the script with options
main(isTestMode, postFilter).catch(console.error);
