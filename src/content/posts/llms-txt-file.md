---
title: "The LLMs.txt File: A New Standard for AI Training Data Attribution"
description: "The emerging LLMs.txt standard is a proposed solution for proper attribution and transparency in AI training data, similar to robots.txt but for large language models."
date: 2024-01-30
author: "Luis García de la Fuente"
image: "/blog-images/thellmstxtfile.webp"
featured: true
lang: "en"
esSlug: "formato-llms-txt"
---

# LLMs.txt: The New Format for the AI Era

## Why your brand needs to be cited by AI (and not just by Google)

Traditional search is no longer the first point of contact: <a href="https://www.gs.statcounter.com/search-engine-market-share" target="_blank" rel="nofollow">more than 25% of US users</a> already ask ChatGPT, Claude, or Perplexity first. If your content doesn't appear in their responses, you disappear from the conversation. The new SEO isn't about ranking ten blue links, but about **training the model** to name you when someone queries your niche.

This shift has fueled speculation about *"magic formats"* that would make AIs read us better. The latest on the list is **LLMs.txt**.

## What is LLMs.txt and what problem does it solve?

LLMs.txt is a plain text file inspired by the classic <a href="https://www.robotstxt.org/" target="_blank" rel="nofollow">robots.txt</a> that allows website owners to specify how their content should be handled by AI training systems. Its purpose: communicate to AI crawlers which pages of your site are relevant, offer summaries in markdown, and theoretically facilitate semantic indexing.

### The problem it solves

Currently, AI training data collection occurs largely without explicit permissions or clear attribution mechanisms. This creates several problems:

- **Lack of Transparency**: Content creators often don't know if their work is being used for AI training
- **No Attribution**: Original authors don't receive credit when their content contributes to AI models
- **Ethical Concerns**: Some creators may not want their work used for AI training at all
- **Quality Control**: No mechanism exists to ensure training data quality and source verification

## LLMs.txt file format and directives

The file is placed at the website root (e.g., `https://example.com/llms.txt`) and can include directives like:

```
# LLMs.txt - AI Training Data Attribution
User-agent: *
Allow: /blog/
Disallow: /private/
Attribution: required
License: CC-BY-4.0
Contact: ai-licensing@example.com
```

### Main directives

- **Allow/Disallow**: Specify what content can be used for training
- **Attribution**: Require proper attribution when content is used
- **License**: Specify license terms for AI training use
- **Contact**: Provide contact information for AI licensing inquiries

## Does it actually work? Market reality

OpenAI, Anthropic, and Perplexity have *referenced* the standard in internal documentation. <a href="https://platform.openai.com/docs/tools/file-search" target="_blank" rel="nofollow">OpenAI File Search</a> itself mentions the utility of plain text files for training embeddings, which generated optimistic headlines. But referencing isn't the same as prioritizing.

### Do SEO heavyweights use it?

To settle doubts, we checked six top sites: Ahrefs, Moz, HubSpot, Semrush, Backlinko, Wordstream. The result: **all return 404**. Neither do <a href="https://nytimes.com/llms.txt" target="_blank" rel="nofollow">The New York Times</a>, <a href="https://bbc.com/llms.txt" target="_blank" rel="nofollow">BBC</a>, nor the brands most cited by AIs in their responses.

ChatGPT, for its part, can read navigation, footers, YouTube transcripts with timestamps, and complete articles without needing this file. The conclusion is clear: **the problem isn't the format, it's content quality and quantity**.

## Google is becoming a publisher with its AI

Meanwhile, Google responds to generic queries —*"what is inbound marketing"*, *"best AI courses"*, *"what is urban mobility"*, etc.— and republishes them. This turns Google into both competitor *and* distributor, a scenario reminiscent of <a href="https://instantarticles.fb.com/" target="_blank" rel="nofollow">Facebook Instant Articles</a> or <a href="https://developer.apple.com/news-publisher/" target="_blank" rel="nofollow">Apple News</a>, but powered by language models.

The <a href="https://developers.google.com/search/blog/2024/05/google-io-search-updates" target="_blank" rel="nofollow">official Google I/O 2024 documentation</a> confirms that content indexed for *AI Overviews* comes from the same traditional index; there's no special LLMs.txt signal.

## Potential benefits for creators and AI developers

### For content creators

1. **Control over usage**: Creators can explicitly control how their work is used
2. **Opt-out capability**: Ability to completely exclude themselves from AI training
3. **Licensing revenue**: Specify license terms and potentially generate income

### For AI developers

1. **Clear guidelines**: Explicit guidance on what content they can use and how
2. **Ethical compliance**: Follow ethical AI development practices
3. **Quality assurance**: Better tracking of training data sources

## Implementation challenges

### Adoption and standardization

- **Major platforms** need to implement the standard
- **Content creators** need to understand and use it
- **AI developers** need to respect the directives

### Practical enforcement

Ensuring AI developers actually follow the directives requires:

- **Technical enforcement** mechanisms
- **Legal frameworks** for compliance
- **Audit and verification** processes

## Current state and outlook

Sites like <a href="https://myllmtxt.com" target="_blank" rel="nofollow">MyLLMtxt.com</a> promote it as the "basic AI Intelligence tool," while <a href="https://directory.llmstxt.cloud/" target="_blank" rel="nofollow">Directory.llmstxt.cloud</a> collects implementation examples.

The `LLMs.txt` standard is still in the proposal stage, but represents an important step toward more ethical and transparent AI development. Various organizations and researchers are working on:

- **Development and refinement** of the standard
- **Implementation tools and libraries**
- **Industry adoption strategies**

## Conclusion: content before format

LLMs.txt is *hype* useful for selling tools, not a confirmed ranking signal. If your goal is to appear in ChatGPT or Claude, focus efforts on: long and well-referenced articles, *FAQPage* and *HowTo* schema, or presence in sources that AIs already consume (<a href="https://en.wikipedia.org/wiki/Main_Page" target="_blank" rel="nofollow">Wikipedia</a>, <a href="https://stackoverflow.com/" target="_blank" rel="nofollow">Stack Overflow</a>, academic repositories).

In the era of generative responses, **being a primary source of content in text or video, and transactions is more valuable than keeping up with trendy formats**.

### Implementation example

For those interested in experimenting, here's a basic `LLMs.txt` file:

```
# LLMs.txt for AI Training Data Attribution
User-agent: *
Allow: /blog/
Allow: /articles/
Disallow: /admin/
Disallow: /private/
Attribution: required
License: CC-BY-4.0
Contact: ai-licensing@example.com
Last-Modified: 2024-01-30
```

---

*The LLMs.txt standard is still in development and its practical effectiveness remains unproven. Content creators and AI developers should stay informed about its evolution, but prioritize content quality over experimental formats.*