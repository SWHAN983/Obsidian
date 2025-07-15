module.exports = async (tp) => {
  const file = tp.file;
  const folderPath = file.folder(true);  // 예: "1.Daily note"
  const today = tp.date.now("YYMMDD");
  const newName = `DN_${today}.md`;
  const newPath = `${folderPath}/${newName}`;

  if (file.path !== newPath) {
    await app.vault.rename(file.path, newPath);
  }
};