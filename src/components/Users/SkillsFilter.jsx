const skillsList = [
  { value: "all", label: "All" },
  { value: "react", label: "React" },
  { value: "angular", label: "Angular" },
  { value: "vue", label: "Vue" },
];

export const SkillsFilter = ({ skillValue, onChangeSkill }) => {
  return (
    <fieldset className="ms-5">
      <legend>Skills:</legend>

      <div className="d-flex">
        {skillsList.map((skill) => (
          <div key={skill.value} className="form-check me-4">
            <label className="form-check-label">
              <span>{skill.label}</span>
              <input
                className="form-check-input"
                type="radio"
                checked={skill.value === skillValue}
                name="skill"
                value={skill.value}
                onChange={onChangeSkill}
              />
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
