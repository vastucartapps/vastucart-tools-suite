/**
 * Yoga Posts Image Generation Script
 *
 * Generates 25 images for 5 yoga-related blog posts using Flux API
 *
 * Posts: Guru Chandal, Neecha Bhanga, Angarak Yoga, Parivartan Yoga, Ashlesha Nakshatra
 *
 * Usage: node scripts/generate-yoga-images.js
 */

const fs = require('fs');
const path = require('path');
const http = require('http');

// Configuration
const API_BASE = 'http://175.111.130.242:6978';
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'blog');

const STYLE_SUFFIX = ', teal and saffron color scheme, mystical spiritual vedic aesthetic, modern minimalist divine design, clean geometric shapes, soft ethereal glow, professional blog header image, high quality digital art';

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

// Image prompts for all 5 yoga posts
const YOGA_IMAGES = [
  // Post 1: Guru Chandal Yoga
  {
    folder: 'guru-chandal',
    images: [
      { filename: 'hero.webp', prompt: 'Majestic Jupiter planet glowing with golden divine light meeting shadowy Rahu with serpentine dark energy, cosmic collision of wisdom and illusion, vedic astrology yoga formation' },
      { filename: 'concept.webp', prompt: 'Ancient vedic scroll showing Jupiter and Rahu conjunction diagram, traditional planetary positions chart, sacred geometry with celestial symbols' },
      { filename: 'analysis.webp', prompt: 'Detailed birth chart horoscope wheel with highlighted Jupiter-Rahu conjunction zone, astrological houses marked, calculation grid overlay' },
      { filename: 'remedy.webp', prompt: 'Sacred yellow sapphire gemstone glowing with divine light, guru yantra mandala, prayer beads and sandalwood offerings for Jupiter remedy' },
      { filename: 'reference.webp', prompt: 'Ancient guru figure meditating under bodhi tree, spiritual wisdom symbols, divine knowledge transmission, vedic teacher iconography' }
    ]
  },
  // Post 2: Neecha Bhanga Yoga
  {
    folder: 'neecha-bhanga',
    images: [
      { filename: 'hero.webp', prompt: 'Weakened planet rising from shadows into brilliant golden light, phoenix-like transformation, debilitation cancellation vedic astrology concept' },
      { filename: 'concept.webp', prompt: 'Before and after planetary transformation diagram, weak planet becoming strong, vedic chart showing neecha bhanga formation rules' },
      { filename: 'analysis.webp', prompt: 'Complex horoscope wheel showing multiple planetary positions for neecha bhanga raja yoga, calculation matrix with strength indicators' },
      { filename: 'remedy.webp', prompt: 'Planetary gemstones arrangement for strength enhancement, vedic yantras glowing with protective energy, ritual items for planetary remedies' },
      { filename: 'reference.webp', prompt: 'Historical vedic astrologers analyzing charts, ancient manuscripts with yoga combinations, scholarly astronomical calculations scene' }
    ]
  },
  // Post 3: Angarak Yoga
  {
    folder: 'angarak-yoga',
    images: [
      { filename: 'hero.webp', prompt: 'Fiery red Mars planet colliding with shadowy Rahu creating explosive celestial energy, angarak yoga dramatic cosmic scene, intense planetary conjunction' },
      { filename: 'concept.webp', prompt: 'Mars and Rahu conjunction diagram on ancient vedic scroll, fire and shadow elements merging, traditional chart with house positions marked' },
      { filename: 'analysis.webp', prompt: 'Birth chart horoscope with Mars-Rahu conjunction highlighted in fire colors, calculation grid showing intensity levels, affected houses marked' },
      { filename: 'remedy.webp', prompt: 'Red coral gemstone surrounded by protective mantras, Hanuman yantra glowing with orange light, Mars pacification ritual items arranged ceremonially' },
      { filename: 'warning.webp', prompt: 'Caution symbols integrated with astrological elements, protective shield around vedic chart, awareness and precaution iconography for planetary affliction' }
    ]
  },
  // Post 4: Parivartan Yoga
  {
    folder: 'parivartan-yoga',
    images: [
      { filename: 'hero.webp', prompt: 'Two planets gracefully exchanging positions in cosmic dance, mutual reception astrology concept, orbital swap with light trails, harmonic celestial exchange' },
      { filename: 'concept.webp', prompt: 'Diagram showing two planets swapping houses, arrows indicating mutual exchange, vedic chart with parivartan yoga formation explained' },
      { filename: 'analysis.webp', prompt: 'Horoscope wheel with highlighted house exchange zones, calculation matrix showing planet strengths before and after exchange, analysis grid' },
      { filename: 'remedy.webp', prompt: 'Balanced gemstone pairing representing exchanging planets, dual yantra arrangement, harmonizing ritual items for mutual planetary benefit' },
      { filename: 'reference.webp', prompt: 'Classic vedic text pages showing parivartan yoga combinations, scholarly interpretation symbols, ancient wisdom manuscript aesthetic' }
    ]
  },
  // Post 5: Ashlesha Nakshatra
  {
    folder: 'ashlesha-nakshatra',
    images: [
      { filename: 'hero.webp', prompt: 'Mystical serpent coiled around sacred star constellation, Naga deity energy, Ashlesha nakshatra cosmic serpent symbolism, divine snake starfield' },
      { filename: 'concept.webp', prompt: 'Star map showing Ashlesha nakshatra position in zodiac Cancer, serpent constellation outline, traditional nakshatra chart with lunar mansion marked' },
      { filename: 'analysis.webp', prompt: 'Birth chart showing Moon in Ashlesha nakshatra, pada divisions marked, Mercury lordship connection diagram, detailed nakshatra analysis wheel' },
      { filename: 'remedy.webp', prompt: 'Naga deity worship items, milk offering bowl, sacred serpent idol with divine glow, Ashlesha nakshatra pacification ritual arrangement' },
      { filename: 'reference.webp', prompt: 'Ancient Naga temples with serpent carvings, mystical healing symbols, kundalini energy representation, spiritual serpent wisdom iconography' }
    ]
  }
];

// Utility functions
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

    const req = http.request(requestOptions, (res) => {
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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateImage(prompt) {
  const fullPrompt = prompt + STYLE_SUFFIX;

  console.log(`  Submitting generation request...`);

  const response = await httpRequest(`${API_BASE}/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: {
      prompt: fullPrompt,
      user_id: 'yoga-posts-generator',
      ...GENERATION_PARAMS
    }
  });

  if (response.status !== 200) {
    throw new Error(`API error: ${response.status} - ${JSON.stringify(response.data)}`);
  }

  const jobId = response.data.job_id || response.data.id || response.data;
  console.log(`  Job ID: ${jobId}`);
  return jobId;
}

async function waitForCompletion(jobId, maxAttempts = 120) {
  console.log(`  Waiting for job ${jobId}...`);

  for (let i = 0; i < maxAttempts; i++) {
    await sleep(2000);

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

      if (i % 5 === 0) {
        console.log(`  Still processing... (${i * 2}s)`);
      }
    }
  }

  throw new Error('Job timed out after ' + (maxAttempts * 2) + ' seconds');
}

async function saveImage(imageUrl, outputPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(outputPath);
    const protocol = imageUrl.startsWith('https') ? require('https') : http;

    protocol.get(imageUrl, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(outputPath, () => {});
      reject(err);
    });
  });
}

// Main execution
async function main() {
  console.log('========================================');
  console.log('Yoga Posts Image Generation Script');
  console.log('5 Posts x 5 Images = 25 Total');
  console.log('========================================\n');

  let totalImages = 0;
  let completed = 0;
  let failed = 0;
  let skipped = 0;
  const startTime = Date.now();

  // Count total images
  for (const post of YOGA_IMAGES) {
    totalImages += post.images.length;
  }

  console.log(`Total images to generate: ${totalImages}\n`);

  for (const post of YOGA_IMAGES) {
    console.log(`\n--- Processing: ${post.folder} ---\n`);

    for (const image of post.images) {
      const outputPath = path.join(OUTPUT_DIR, post.folder, image.filename);
      const currentNum = completed + failed + skipped + 1;

      // Skip if already exists
      if (fs.existsSync(outputPath)) {
        console.log(`[${currentNum}/${totalImages}] Skipping ${post.folder}/${image.filename} (already exists)`);
        skipped++;
        continue;
      }

      console.log(`\n[${currentNum}/${totalImages}] Generating: ${post.folder}/${image.filename}`);
      console.log(`  Prompt: ${image.prompt.substring(0, 60)}...`);

      try {
        const jobId = await generateImage(image.prompt);
        const result = await waitForCompletion(jobId);

        // Get image URL from various response formats
        const imageUrl = result.image_url || result.url || result.output ||
                        (result.result && result.result.image) ||
                        (result.result && result.result.url);

        if (imageUrl) {
          console.log(`  Downloading from: ${imageUrl.substring(0, 50)}...`);
          await saveImage(imageUrl, outputPath);
          console.log(`  Saved: ${post.folder}/${image.filename}`);
          completed++;
        } else {
          // Handle base64 response
          const base64Data = result.image_base64 || result.base64 ||
                            (result.result && result.result.base64);
          if (base64Data) {
            const buffer = Buffer.from(base64Data, 'base64');
            fs.writeFileSync(outputPath, buffer);
            console.log(`  Saved (base64): ${post.folder}/${image.filename}`);
            completed++;
          } else {
            console.log(`  Warning: No image in response`);
            failed++;
          }
        }

      } catch (error) {
        console.error(`  ERROR: ${error.message}`);
        failed++;
      }

      // Progress update
      const elapsed = Math.round((Date.now() - startTime) / 1000);
      const done = completed + failed + skipped;
      const remaining = totalImages - done;
      if (done > 0) {
        const avgTime = elapsed / done;
        const estRemaining = Math.round(avgTime * remaining / 60);
        console.log(`  Progress: ${done}/${totalImages} done, ~${estRemaining} min remaining`);
      }
    }
  }

  // Summary
  const totalTime = Math.round((Date.now() - startTime) / 1000);
  console.log('\n========================================');
  console.log('Generation Complete!');
  console.log('========================================');
  console.log(`Total: ${totalImages} images`);
  console.log(`Completed: ${completed}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Failed: ${failed}`);
  console.log(`Time: ${Math.round(totalTime / 60)} minutes`);
}

main().catch(console.error);
