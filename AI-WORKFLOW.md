# How this site and my tools were built

A record of which parts of my work are made with AI agents, and what the
evidence for that is. I keep it in the open rather than listing tool names
on a CV.

## This site

Built with Claude Code, in the repository you are reading. 135 commits
between 11 and 20 November 2026; 133 of them carry a
`Co-Authored-By: Claude` trailer, which is the honest record of how the work
was done.

The division of labour: the structure of the site, the grid, the type scale,
the content of every case and every design decision are mine. The code that
renders them was written by the agent, under review, change by change. When
a layout was wrong I described what was wrong and why, not what to type.

## Tools I built for my own design work

Two Figma plugins, written to remove repetitive work from design-system
maintenance:

- **DS Relink** — relinks screens to a file's design system. Submitted to
  Figma Community as an individual creator.
- **Type Order** — typography migration inside a file.

## Earlier work with AI

The previous version of this portfolio was built with Cursor in October
2025. I kept a log of the actual prompts and what came back, so the process
is traceable rather than asserted:
[`docs/cursor-prompt-log-2025.md`](docs/cursor-prompt-log-2025.md).

I also wrote an article on DOU testing Figma's GitHub integration, including
what the model read from the repository and where it was wrong.

## What is not here

Client work is not built this way, and none of it is in this repository or
in any other public one.
