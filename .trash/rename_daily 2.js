module.exports = async (tp) => {
  const file = tp.file;
  if (!file || !file.path) {
    new Notice("❌ 파일 정보 없음: tp.file 또는 path가 undefined입니다.");
    return;
  }

  const folderPath = file.folder(true);
  const today = tp.date.now("YYMMDD");
  const newName = `DN_${today}.md`;
  const newPath = `${folderPath}/${newName}`;

  if (file.path !== newPath) {
    try {
      await app.vault.rename(file.path, newPath);
      new Notice(`✅ 자동 이름 변경 완료 → ${newName}`);
    } catch (err) {
      new Notice("❌ rename 실패: " + err.message);
    }
  } else {
    new Notice("ℹ️ 이미 올바른 이름입니다.");
  }
};
