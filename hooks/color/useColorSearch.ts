import { useState } from 'react';

export function useColorSearch() {
  const [searchKeywordInput, setSearchKeywordInput] = useState('');
  const [selectedSetName, setSelectedSetName] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchSetName, setSearchSetName] = useState('');
  const [searchType, setSearchType] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  const handleKeywordChange = (value: string) => {
    setSearchKeywordInput(value);
  };

  const handleSetNameChange = (value: string) => {
    setSelectedSetName(value);
  };
  const handleTypeChange = (value: string) => {
    setSelectedType(value);
  };

  const applySearch = () => {
    setSearchKeyword(searchKeywordInput.trim());
    setSearchSetName(selectedSetName);
    setSearchType(selectedType);
  };

  const openSearch = () => {
    setSearchOpen(true);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };


  //スマホ向けアコーディオン切り替えロジック
  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
  };
  return {
    searchKeywordInput,
    selectedSetName,
    selectedType,
    searchKeyword,
    searchSetName,
    searchType,
    searchOpen,
    handleKeywordChange,
    handleSetNameChange,
    handleTypeChange,
    applySearch,
    openSearch,
    closeSearch,
    toggleSearch,
  };
}
