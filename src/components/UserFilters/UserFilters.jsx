// import { FiPlus } from 'react-icons/fi';

import { AvailabilityFilter } from "./AvailabilityFilter";
import { SearchInput } from "./SearchInput";
import { SkillsFilter } from "./SkillsFilter";

export const UserFilters = ({
  onChangeAvailability,
  onChangeSkill,
  filters,
  onChangeSearch,
  onResetSearch,
}) => {
  const { isChecked, skill, search } = filters;
  return (
    <>
      <div className="d-flex align-items-center mb-5">
        <AvailabilityFilter
          onChangeAvailability={onChangeAvailability}
          isChecked={isChecked}
        />
        <SkillsFilter skill={skill} onChangeSkill={onChangeSkill} />

        {/* <button type="button" class="btn btn-primary btn-lg ms-auto">
          <FiPlus />
        </button> */}
      </div>

      <SearchInput
        search={search}
        onChangeSearch={onChangeSearch}
        onResetSearch={onResetSearch}
      />
    </>
  );
};
