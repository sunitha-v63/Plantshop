import React from 'react';

const SortDropdown = ({ sortOption, setSortOption }) => {
  const options = [
    { label: 'Featured', value: 'featured' },
    { label: 'Best Selling', value: 'best_selling' },
    { label: 'Alphabetically, A-Z', value: 'az' },
    { label: 'Alphabetically, Z-A', value: 'za' },
    { label: 'Price, Low to High', value: 'price_low_high' },
    { label: 'Price, High to Low', value: 'price_high_low' },
  ];

  const handleSelect = (value) => {
    setSortOption(value);
  };

  return (
    <div className="d-flex align-items-center mb-3">
      <span className="fw-bold me-2">Sort by:</span>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          {options.find(opt => opt.value === sortOption)?.label || 'Select'}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {options.map((opt) => (
            <Dropdown.Item key={opt.value} eventKey={opt.value}>
              {opt.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default SortDropdown;
