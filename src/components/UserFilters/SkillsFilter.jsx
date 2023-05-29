export const SkillsFilter = ({ skill, onChangeSkill}) => {
  return (
    <fieldset className="ms-5">
      <legend>Skills:</legend>

      <div className="d-flex">
        <div className="form-check me-4">
          <label className="form-check-label">
            <span>React</span>
            <input
              className="form-check-input"
              type="radio"
              checked={skill === 'react'}
              name="skill"
              value="react"
              onChange={onChangeSkill}
            />
          </label>
        </div>

        <div className="form-check me-4">
          <label className="form-check-label">
            <span>Angular</span>
            <input
              className="form-check-input"
              type="radio"
              checked={skill === 'angular'}
              name="skill"
              value="angular"
              onChange={onChangeSkill}
            />
          </label>
        </div>

        <div className="form-check me-4">
          <label className="form-check-label">
            <span>Vue</span>
            <input
              className="form-check-input"
              type="radio"
              name="skill"
              checked={skill === 'vue'}
              value="vue"
              onChange={onChangeSkill}
            />
          </label>
        </div>
      </div>
    </fieldset>
  );
};
