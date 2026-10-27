type FormErrorLabelProps = {
  id: string;
  message?: string;
};

export function FormErrorLabel({ id, message }: FormErrorLabelProps) {
  if (!message) return null;

  return (
    <p className="mt-1.5 text-sm font-medium text-berry" id={id} role="alert">
      {message}
    </p>
  );
}
