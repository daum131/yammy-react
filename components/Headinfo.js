import Head from "next/head";

const Headinfo = ({title, keyword, contents}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keyword" content={keyword} />
        <meta name="description" content={contents} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

Headinfo.defaultProps={
    title:"Yammy",
    keyword:"Yammy",
    contents:"yammy yammy"
}

export default Headinfo;
