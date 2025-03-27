async function loading() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done");
    }, 3000);
  });
}

const page = async ({ params }: { params: { dtest: string } }) => {
  await loading();

  return <div>{params.dtest}</div>;
};

export default page;


// useParams() only works inside Client Components, but you made page an async function. => error