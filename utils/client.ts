import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'c553c1g6',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: false,
  token: 'skCUmd7hJDGNo2lvMKfDOLhBcBZQg3WL20IuWpkZYCjDGZlvQWkRqIEWaHGQKdrwfe1dPR9DwN6SBgLbX9PMatQgEtcFl1HM21RTB7gxFRIuhAPJsBlIodgvwLE31VEw84ExWg020oavXbcSdvS5t45nJjCgoEISOMFf1Gae84X9BsAFgdIk',
});
