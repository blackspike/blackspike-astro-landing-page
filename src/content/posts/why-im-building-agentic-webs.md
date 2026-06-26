---
title: "Why I'm Building Agentic Webs"
description: "Most websites are monuments to a conversation that never happens. Agentic Webs is my R&D effort to rethink the website as an autonomous agent—why the shift matters and what's coming."
date: 2026-06-26
author: "Luis García de la Fuente"
image: "/blog-images/what-is-an-agentic-web-and-why-it-changes-the-rules-online-agentic-webs.webp"
featured: true
lang: "en"
esSlug: "por-que-construyo-webs-agenticas"
---

# Why I'm Building Agentic Webs

I keep coming back to a small, slightly embarrassing observation: most websites are monuments to a conversation that never happens.

A business spends money to get someone to the page. The visitor arrives with a real question, scans for three seconds, doesn't find the exact answer, and leaves. The business never knew they were there. The page just sat, displaying things, the way it displayed things yesterday and will display them tomorrow. We've all built these. I've built plenty.

Agentic Webs is the project I started to take that observation seriously. It's an independent R&D effort, an initiative under HAL149, looking at what happens to the website when AI stops being a feature you bolt on and becomes the thing the site actually *is*. This post is me explaining why I think that shift matters, and what I believe is coming.

## The thing I couldn't unsee

For thirty years we designed websites for one kind of visitor: a person with eyes, limited patience, and a mouse. Every assumption baked into the modern web stack flows from that. Navigation menus, because a human needs to find their way. Forms, because a human has to hand over their details before anything happens. Landing pages, because a human has to be funneled.

Then two things happened at once.

People stopped behaving like that. They now expect to ask a question in plain language and get an answer immediately, the way they do with ChatGPT or Perplexity. A navigation menu and a phone number feels, increasingly, like being handed a paper map.

And the *other* kind of visitor started showing up: software. AI agents that arrive on behalf of a person, read what's there, and act. They don't scroll. They don't admire your hero image. They query, and if your site can't be queried, they move on to one that can.

Once I saw the web through both of those lenses at the same time, the static page stopped looking like the default and started looking like a legacy format. That's the itch behind the whole project.

## What an agentic web actually is

The phrase "agentic web" gets used at two scales, and I think keeping them separate is half the battle.

At the **macro scale**, "agentic web" names a new phase of the internet. We're moving from a web that is read and browsed to a mesh of autonomous agents that interpret goals, make decisions, and transact with each other over open protocols. The web becomes machine-to-machine infrastructure. This isn't my prediction; it's roughly the consensus forming across the people building agent protocols right now.

At the **micro scale**, which is where Agentic Webs lives, the question becomes: what does a single website look like if it's a node in that mesh? My answer is that the site stops being content and becomes an agent. Not a chatbot in the corner of a landing page, but the entire site designed, from the architecture up, as an autonomous system that knows the business and acts in real time. It responds, it qualifies, it recommends, and it hands off to a human only when one is actually needed.

That distinction (a site *designed as* an agent versus a site *with* an assistant added) is the part I care most about, because almost everything in the market today is the second thing pretending to be the first.

## The eight dimensions

When I describe the concept to people, they tend to collapse it down to "oh, so it answers questions." That's one slice. The reason I treat it as a category rather than a feature is that it spans eight distinct dimensions, and the value comes from all of them operating together.

1. **A conversational interface.** The visitor states intent in natural language and gets the answer, structured, without digging through pages.

2. **Real-time personalization.** Not by segment or cookie, but by what the visitor actually says. Someone asking about price gets a different experience than someone asking about specifications.

3. **Agent-to-agent interoperability.** The site exposes clean, structured data that an external agent can read and act on, over the protocols consolidating as standards (MCP, A2A).

4. **Integration with internal systems.** The agent connects to the CRM and ERP, so what it says on the web reflects the live state of the business, not a number someone updated three months ago.

5. **A closed-loop content engine.** The system formulates a content strategy, publishes optimized for search and answer engines, measures what converts, and adjusts the next cycle. It grows where there's proven demand.

6. **AISEO as a discovery layer.** Being the cited answer when someone asks an AI engine about your industry, built in from the ground up rather than bolted on.

7. **Platform extensibility.** Vertical applications (a valuation tool, a diagnostic, a configurator) that the agent invokes mid-conversation when it detects the right intent.

8. **A shift from attention to outcomes.** The economic model changes underneath all of it, which deserves its own section.

If you only build the first dimension, you've built a nice chatbot. The bet is that the combination is a different species.

## The economics are what convinced me

I'm an infrastructure person at heart, so the dimension that actually moved me from "interesting" to "I should build this" was the economic one.

The traditional web monetizes attention. You pay for someone to see an ad, click, and fill out a form, and then a human spends time qualifying and closing. The agentic web monetizes outcomes. The agent delivers the answer, qualifies the intent, and prepares the transaction inside the conversation, at the marginal cost of inference.

And inference cost has fallen off a cliff. The price of GPT-4-equivalent performance dropped roughly 99.7% in three years. A permanent conversational agent on a small business's website went from a luxury to a rounding error. When a full qualification conversation costs a fraction of a cent in tokens, and a salesperson doing the same costs time, salary, and limited hours, the comparison isn't close.

That's the part I find genuinely hard to argue with. The cost curve already happened. The rest is catching up to it.

## Why I think the timing is right

Three things had to be true at once for this to be buildable rather than just sayable, and as of now they are.

The protocols standardized. MCP is under the Linux Foundation with a registry approaching 10,000 servers; A2A has broad adoption. A site can now be a real node in an agent ecosystem instead of an isolated silo.

The discovery layer shifted. With a large and growing share of searches ending without a click, being the answer an AI engine cites matters more than ranking blue links. Static pages don't meet that bar; an agentic web can be architected for it.

And regulation is forcing seriousness. The EU AI Act's transparency obligations land in August 2026. Anyone improvising an autonomous agent in the EU has a problem; anyone who builds compliance in by default has an advantage. That deadline is a forcing function, and I'd rather be early to it than scrambling.

## The size of the thing

I recently published a market-sizing analysis on the project blog, partly to discipline my own optimism. Built bottom-up from adjacent markets (web development at about $87.75B in 2026, the AI agents market, CRM, conversational AI) rather than projected top-down, the base case lands at a **$40B–$80B annual category** by the early 2030s.

The upside, above $100B, depends on websites becoming transaction endpoints that other agents buy from directly. That's the part that's still contingent. But the direction is visible: Morgan Stanley puts agentic shoppers at $190B–$385B in US e-commerce by 2030, and Gartner expects 90% of B2B buying to be AI-mediated by 2028. A business with no agent-readable layer simply doesn't participate in that.

I don't take those numbers as destiny. I take them as evidence that I'm not the only one who sees the road.

## What I'm actually betting on

Here's the honest core of it. I don't think agentic webs replace websites. I think they upgrade what a website *is for*. The site has already changed jobs three times: brochure, then lead funnel, then storefront. Each change made it worth more, not less. The next job is the website as an autonomous interface that serves human visitors and transacts with AI agents.

Agentic Webs is my attempt to study that next job carefully, in the open, before it becomes obvious. The project publishes its thinking as an editorial reference rather than a sales pitch, because right now the most useful thing I can do is map the territory clearly.

I might be early. I might be wrong about the timing. But I'm fairly convinced I'm not wrong about the direction, and that's enough to keep building.

If any of this resonates, the deeper write-ups live at [agenticwebs.com](https://agenticwebs.com/).
