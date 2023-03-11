function handleSubmit(event) {
  event.preventDefault();
  const now = new Date();
  const dobDate = new Date(dob);
  const ageDiffMs = now.getTime() - dobDate.getTime();
  const ageDate = new Date(ageDiffMs);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  if (age < 18) {
    alert('You must be at least 18 years old to submit this form.');
    return;
  }
  // TODO: Perform form submission
}