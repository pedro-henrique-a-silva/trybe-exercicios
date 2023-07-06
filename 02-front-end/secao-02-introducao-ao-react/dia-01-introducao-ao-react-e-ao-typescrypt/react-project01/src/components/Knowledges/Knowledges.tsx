function Knowledges() {
  const knowledgesList = ['html ', 'css', 'javascript', 'hofs'];
  // const knowledgesListComp = [
  //   <li key="html1">html</li>, <li key="css1">css</li>,
  //   <li key="javascript1">javascript</li>, <li key="hofs1">hofs</li>,
  // ];
  // const knowledgesListCompP = [
  //   <p key="html1">html</p>, <p key="css1">css</p>,
  //   <p key="javascript1">javascript</p>, <p key="hofs1">hofs</p>,
  // ];

  return (
    <section>
      <ul>
        <h1>Primeira lista</h1>

        { knowledgesList.map((element) => <li key={ element }>{element}</li>) }
      </ul>
    </section>
  );
}

export default Knowledges;
