# IE9 and custom headers

This is a test repo to finally answer the dreaded question:

> Can we send custom headers in an AJAX request with IE9 or not?

Conflicting sources over the Interwebs led to the building of this repo.

And the answer is mixed:

# YES, for same-domain requests

# NO, for cross-domain requests

See the file `public/index.html` for jQuery-based requests.

# Usage

`npm install && node index.js`

Open your browser to `http://0.0.0.0:3000`.

Your machine **MUST** be able to resolve a subdomain `api` for the demo to work.
But as we test cross domain requests, let's agree it's a fair requirement :)

# License

ISC
