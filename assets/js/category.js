$(() => {
  const subCategories = [
    "Paracetamol",
    "Ibuprofen",
    "Hydrocodone",
    "Naproxen",
    "Aspirin",
    "Celecoxib",
    "Oxycodone",
    "Codeine",
    "Diclofenac",
    "Tramadol",
    "Fentanyl",
    "Methadone",
    "Hydromorphone",
    "Meperidine",
    "Ketorolac",
    "Paracetamol",
    "Morphine",
    "Buprenorphine",
    "Lidocaine",
    "Gabapentin",
    "Duloxetine",
    "Amitriptyline",
    "Clonidine",
    "Pregabalin",
    "Carbamazepine",
  ];
  const container = $("#sub-categories-container");
  subCategories.forEach(function (medication) {
    container.append(
      '<a href="#" class="medication-button w-fit h-fit border rounded-sm p-4 px-6">' +
        medication +
        "</a>"
    );
  });
});
