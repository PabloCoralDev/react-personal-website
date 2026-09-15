const SEASON_NAMES: Record<string, string> = {
  sp: 'Spring',
  su: 'Summer',
  fa: 'Fall',
}

function titleCase(words: string): string {
  return words
    .split(' ')
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ')
}

const NOISE_WORDS = new Set(['dml'])

export function deriveCaptionFromFilename(filename: string): string {
  const base = filename.replace(/\.[^./]+$/, '')
  const words = base.split(/[_-]+/).filter((word) => word && !NOISE_WORDS.has(word.toLowerCase()))

  const last = words[words.length - 1]?.toLowerCase() ?? ''
  const semesterMatch = last.match(/^(sp|su|fa)(\d{2})$/)

  if (semesterMatch) {
    const [, season, year] = semesterMatch
    const rest = words.slice(0, -1).join(' ')
    const label = titleCase(rest || 'photo')
    return `${label} from ${SEASON_NAMES[season]} 20${year}`
  }

  return titleCase(words.join(' '))
}
