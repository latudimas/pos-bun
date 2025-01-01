{
  description = "POS BUN flake definitions";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
          config.allowUnfree = true;
        };
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            bun
            sqlite
          ];

          shellHook = ''
            echo "🚀 Welcome to your Bun/TypeScript development environment!"
            echo "📦 Bun version: $(bun --version)"
            echo "🗃️  SQLite version: $(sqlite3 --version)"
            # exec zsh
          '';
        };
      });
}
