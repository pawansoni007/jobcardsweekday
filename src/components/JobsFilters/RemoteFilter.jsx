import { SingleValueFilter } from "../SingleValueFilter";

export default function RemoteFilter() {
  return (
    <SingleValueFilter
      name="remoteOrOnSite"
      label="Remote"
      placeholder="Remote"
      options={[
        { value: "remote", label: "Remote" },
        { value: "~remote", label: "On-Site" },
      ]}
    />
  );
}
