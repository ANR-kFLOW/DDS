export function generateICS(event: {
  title: string;
  description: string;
  location: string;
  startDate: string;
  endDate?: string;
  allDay?: boolean;
}): string {
  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  };

  const formatDateOnly = (iso: string) => {
    const d = new Date(iso);
    const y = d.getUTCFullYear();
    const m = String(d.getUTCMonth() + 1).padStart(2, "0");
    const day = String(d.getUTCDate()).padStart(2, "0");
    return `${y}${m}${day}`;
  };

  const uid = `dds2026-${Date.now()}-${Math.random().toString(36).slice(2)}@dds2026`;
  const now = formatDate(new Date().toISOString());

  let dtStart: string;
  let dtEnd: string;

  if (event.allDay) {
    dtStart = `DTSTART;VALUE=DATE:${formatDateOnly(event.startDate)}`;
    if (event.endDate) {
      const end = new Date(event.endDate);
      end.setUTCDate(end.getUTCDate() + 1);
      dtEnd = `DTEND;VALUE=DATE:${formatDateOnly(end.toISOString())}`;
    } else {
      const end = new Date(event.startDate);
      end.setUTCDate(end.getUTCDate() + 1);
      dtEnd = `DTEND;VALUE=DATE:${formatDateOnly(end.toISOString())}`;
    }
  } else {
    dtStart = `DTSTART:${formatDate(event.startDate)}`;
    dtEnd = `DTEND:${formatDate(event.endDate || event.startDate)}`;
  }

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//DDS2026//Workshop//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${now}`,
    dtStart,
    dtEnd,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description.replace(/\n/g, "\\n")}`,
    `LOCATION:${event.location}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  return lines.join("\r\n");
}

export function downloadICS(event: Parameters<typeof generateICS>[0]) {
  const ics = generateICS(event);
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${event.title.replace(/\s+/g, "_")}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
