# Java Reactors

Backend logic for this SEMOSS app — Java classes for DB access, heavy computation, and
LLM calls. Extend `AbstractProjectReactor` to build a new reactor.

For the reactor rules, how to expose a reactor as an MCP tool (hand-edit
`mcp/pixel_mcp.json`), and how to call reactors from the frontend, see the **Java reactor
rules** and **MCP manifests** sections of [CLAUDE.md](../CLAUDE.md) and the
`semoss-mcp-manifest` skill.

```
java/
├── src/
│   ├── reactors/   AbstractProjectReactor (base) + your reactors
│   └── util/       Constants, HelperMethods, ProjectProperties
└── project.properties
```
