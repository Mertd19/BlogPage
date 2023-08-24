$( function() {
    var autoComplete = [
      "Ankara",
      "Çorum",
      "Samsun",
      "İstanbul",
      "Sinop",
      "Konya",
      "Çorum Müzesi",
      "Müze",
      "Kız Kulesi",
      "Aşti",
      "Atakule",
      "Kule",
      "Otogar",
      "Şehir",
      "İçerik",
      "Başlık",
      "Table"
    ];
    $("#tagsSearch").autocomplete({
        source: autoComplete
    });
  } );