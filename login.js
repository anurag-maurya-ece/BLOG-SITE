// Dark Mode Button
const darkToggle = document.getElementById("dark-mode-toggle");

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


  //  Slide baar ke liye
  
 const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("toggle-btn");
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
