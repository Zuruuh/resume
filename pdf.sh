#!/bin/bash

GOTENBERG_URL="http://localhost:7600"
PREVIEW_URL="http://localhost:4321/fr/pure/index.html"

curl --request POST "$GOTENBERG_URL/forms/chromium/convert/url" \
  --form url="$PREVIEW_URL" \
  --form paperWidth=8.27 \
  --form paperHeight=11.7 \
  --form marginTop=0.0 \
  --form marginBottom=0.0 \
  --form marginLeft=0.0 \
  --form marginRight=0.0 \
  --form scale=1.322 \
  -o out.pdf
