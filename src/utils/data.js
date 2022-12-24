let catatans = [
      {
        id: 1,
        title: 'Weekly Meeting',
        createdAt: '2022-04-14T04:27:34.572Z',
        body: 'Presentasi progress sale produk handwash dan launching produk baru',
      },
      {
        id: 2,
        title: 'Kajian Ustad Uki',
        createdAt: '2022-04-14T04:27:34.572Z',
        body: `Sebaik baiknya jembatan adalah dunia. Orang yang mencari dunia sudah dipastikan mendapat kepedihan di akhirat.`,
      },
      {
        id: 3,
        title: 'Lecture Professor James',
        createdAt: '2022-04-14T04:27:34.572Z',
        body: `You'll never be successful in what you do if you're more worried about others than you are yourself. focus on your craft and you'll go. let other people do their thing`,
      },
    ]

    function getCatatans() {
      return catatans;
    }

    function getCatatan(id) {
      const foundedNote = catatans.find((note) => note.id === id);
      return foundedNote;
    }

    function addCatatan({title, body}) {
    catatans = [
      ...catatans,
      {
        id: +new Date(),
        title: title || 'Untitled', 
        body, 
        createdAt: new Date().toISOString()
      },
    ];
  };

   const showDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("id-ID", options);
  };

  function deleteCatatan(id) {
    catatans = catatans.filter(catatan => catatan.id !== id);
  }
    
   export { getCatatans, showDate as showFormattedDate, deleteCatatan, getCatatan, addCatatan };