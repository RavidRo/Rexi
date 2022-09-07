export type RegEx = PrimRE | CompoundRE;

export type PrimRE = string;
export type CompoundRE = SingleRE | ListRE;

export type SingleRE = Star | Plus | Optional | Repeat;
export type ListRE = Concat | Union | Intersect;

export type Star = { type: 'star'; re: RegEx };
export type Plus = { type: 'plus'; re: RegEx };
export type Optional = { type: 'optional'; re: RegEx };
// max is undefined for min = max (i.e. repeat exactly n times).
// max is infinity for max = infinity explicitly.
export type Repeat = { type: 'repeat'; re: RegEx; min: number; max?: number };

export type Concat = { type: 'concat'; re: RegEx[] };
export type Union = { type: 'union'; re: RegEx[] };
export type Intersect = { type: 'intersection'; re: RegEx[] };
