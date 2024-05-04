import MultiValueFilter from "../MultiValueFilter";

export default function RolesFilter() {
  return (
    <MultiValueFilter
      name="roles"
      label="Roles"
      placeholder="Roles"
      options={[
        {
          label: "Backend",
          value: "backend",
        },
        {
          label: "Frontend",
          value: "frontend",
        },
        {
          label: "Android",
          value: "android",
        },
        {
          label: "iOS",
          value: "ios",
        },
        {
          label: "Tech Lead",
          value: "tech lead",
        },
      ]}
    />
  );
}
