// Interface representing Major Credits with a branded number type
export interface MajorCredits {
  credits: number & { __brand: 'MajorCredits.credits' };
}

// Interface representing Minor Credits with a branded number type
export interface MinorCredits {
  credits: number & { __brand: 'MinorCredits.credits' };
}

// Function to sum two MajorCredits and return a new MajorCredits object
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

// Function to sum two MinorCredits and return a new MinorCredits object
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}
