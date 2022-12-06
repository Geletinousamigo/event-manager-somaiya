export const renderGenreTags = (tagName) => {
  let color = "";
  console.log(color)
  switch (tagName) {
    
    case "Hackathons":
      return (color = "primary");
    case "Hacking":
      return (color = "primary");
    case "Web Development":
      return (color = "success");
    case "Android Development":
      return (color = "accent");
    case "Robotics":
      return (color = "warning");
    default:
      return (color = "default");
      
  }
  
};


export const renderDepartmentTags = (tagName) => {
  let color = "";
  console.log(color)
  switch (tagName) {
    case "IT":
      return (color = "primary");
    case "CS":
      return (color = "danger");
    case "BCA":
      return (color = "success");
    case "ECS":
      return (color = "accent");
    default:
      return (color = "default");
  }
};

