var headerDateTimeInterval = setInterval(updateDateTime, 1000);

function updateDateTime() {
  document.getElementById('header-date-time').textContent = dayjs().format(
    'YYYY-MM-DD HH:mm:ss'
  );
}
