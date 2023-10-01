export type ISO8601 =
  `${number}-${number}-${number}T${number}:${number}:${number}.${number}${number}${number}Z`;

export type Snake = {
  head: ISO8601;
  tail: ISO8601;
};
