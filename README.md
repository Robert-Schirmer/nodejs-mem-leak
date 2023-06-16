1. [Install Docker](https://docs.docker.com/engine/install)
1. [Install nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
1. `nvm install v18.15.0 && nvm install v18.16.0`
1. In one terminal: `docker run -p 58080:80 kennethreitz/httpbin`
1. In another terminal:
   - `nvm use v18.15.0 && npm test` doesn't leak ✅
   - `nvm use v18.16.0 && npm test` leaks ❌
