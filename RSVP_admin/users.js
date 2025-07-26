let supabase; // 👈 biến toàn cục

(async function () {
  supabase = window.supabase.createClient(
    CONFIG.SUPABASE_URL,
    CONFIG.SUPABASE_KEY
  );

  const user = JSON.parse(localStorage.getItem("userInfo"));
  if (!user || !user.username || user.role === 1) {
    window.location.href = "/RSVP_admin/login.html";
    return;
  }

  const user2 = user; // Gán lại nếu cần, nhưng bạn có thể dùng luôn `user`

  let allThemes = [];

  async function loadDataFromTable() {
    const { data, error } = await supabase
      .from("admins")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      document.getElementById(
        "rsvpTableBody"
      ).innerHTML = `<tr><td colspan="4">⚠️ Lỗi tải dữ liệu từ admins</td></tr>`;
      console.error(error.message);
      return;
    }

    allThemes = data;
    renderData(allThemes);
  }

  function renderData(data) {
    const tbody = document.getElementById("rsvpTableBody");
    tbody.innerHTML = "";

    data.forEach((item, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="p-2 text-center">${index + 1}</td>
        <td class="p-2 text-left">${item.username}</td>
        <td class="p-2 text-center" style="font-weight: bold; color: ${
          item.role == "1" ? "blue" : "green"
        }">
          <i class="bi ${
            item.role == "1" ? "bi bi-person-circle" : "bi bi-person-gear"
          }"></i>
        </td>
        <td
  class="p-2 text-center"
  style="font-weight: bold; cursor: pointer; color: ${
    String(item.status) === "1" ? "red" : "green"
  }"
  onclick="window.toggleStatus(${item.id}, '${item.status}')"
>
  <i class="bi ${
    String(item.status) === "1" ? "bi-x-circle" : "bi-check-circle"
  }"></i>
</td>



        <td class="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent text-center adminOnly">
        <a class="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400" href="#" onclick="editUser(${
          item.id
        })">✏️ Sửa</a>
          <a class="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400" href="#"
            onclick="deleteEntry(${item.id}, '${item.username.replace(
        /'/g,
        "\\'"
      )}')">🗑️ Xoá</a>
        </td>
      `;
      tbody.appendChild(tr);
    });

    // 👇 Xử lý ẩn/hiện sau khi render
    document.querySelectorAll(".adminOnly").forEach((el) => {
      el.style.display = user2?.role === 0 ? "table-cell" : "none";
    });
  }

  // ✅ Event xoá
  window.deleteEntry = async function (id, name) {
    if (!confirm("Bạn có chắc muốn xoá " + name + " không?")) return;

    const { error } = await supabase.from("admins").delete().eq("id", id);

    if (error) {
      alert("❌ Xoá thất bại: " + error.message);
      return;
    }

    await loadDataFromTable();
    // Nếu không có `loadChartFromTable`, bạn có thể bỏ dòng dưới:
    // await loadChartFromTable(window.currentTable);
  };

  window.toggleStatus = async function (id, currentStatus) {
    console.log(
      "🟡 Đang toggle id:",
      id,
      "Trạng thái hiện tại:",
      currentStatus
    );

    const newStatus = currentStatus === "1" ? "0" : "1";

    const { error } = await supabase
      .from("admins")
      .update({ status: newStatus })
      .eq("id", id);

    if (error) {
      alert("❌ Không thể cập nhật trạng thái: " + error.message);
      return;
    }

    console.log("✅ Cập nhật thành công!");
    await loadDataFromTable();
  };

  // ✅ Load lần đầu
  await loadDataFromTable();

  window.editUser = function (id) {
    const user = allThemes.find((u) => u.id === id);
    if (!user) return alert("Không tìm thấy user");

    document.getElementById("editId").value = user.id;
    document.getElementById("editUsername").value = user.username;
    document.getElementById("editRole").value = user.role;
    document.getElementById("editStatus").value = user.status;

    document.getElementById("editPopupOverlay").style.display = "flex";
  };

  window.saveEdit = async function () {
    const id = document.getElementById("editId").value;
    const username = document.getElementById("editUsername").value.trim();
    const role = document.getElementById("editRole").value;
    const status = document.getElementById("editStatus").value;

    const { error } = await supabase
      .from("admins")
      .update({ username, role, status })
      .eq("id", id);

    if (error) {
      alert("❌ Lỗi khi cập nhật: " + error.message);
      return;
    }

    closePopup();
    await loadDataFromTable();
  };

  window.closePopup = function () {
    document.getElementById("editPopupOverlay").style.display = "none";
  };
})();
