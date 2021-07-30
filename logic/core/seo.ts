export function generateSeoHead(title: string, description: string) {
  return {
    title,
    meta: [
      {
        name: 'description',
        content: description
      },
    ],
  };
}
