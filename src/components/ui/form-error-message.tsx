export default function FormErrorMessage({ errorMessage }: { errorMessage: string }) {
  if (!errorMessage) return;
  return <span className='text-destructive text-sm flex justify-around'>{errorMessage}</span>;
}
