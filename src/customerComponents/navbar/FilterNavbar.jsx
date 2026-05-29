
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function FilterNavbar({ onFilterProducts }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  let [categories, setCategories] = useState([]);
  let [subCategories, setSubCategories] = useState([]);

  const selectedCategoryId = watch("category");

  useEffect(() => {
    async function getAllCategories() {
      try {
        const response = await fetch(
          "http://localhost:8080/api/v1/vendor/categories"
        );

        const responseObject = await response.json();
        setCategories(responseObject.data);
      } catch (error) {
        console.log(error);
      }
    }

    getAllCategories();
  }, []);

  useEffect(() => {
    if (
      !selectedCategoryId ||
      selectedCategoryId === "all" ||
      categories.length === 0
    ) {
      setSubCategories([]);
      return;
    }

    const selectedCategory = categories.find(
      (cat) => cat.id === Number(selectedCategoryId)
    );

    setSubCategories(selectedCategory?.subCategories || []);
  }, [selectedCategoryId, categories]);

  const submitHandler = (data) => {
    const category =
      data.category === "all"
        ? null
        : categories.find((cat) => cat.id === Number(data.category));

    const subCategory =
      data.subCategory === "all"
        ? null
        : subCategories.find(
            (sub) => sub.id === Number(data.subCategory)
          );

    onFilterProducts(
      category?.name,
      subCategory?.name,
      data.sortDirection
    );
  };

  return (
    <form
      className="row g-2 mt-3"
      onSubmit={handleSubmit(submitHandler)}
    >
      {/* Category */}
      <div className="col-md-3">
        <select
          className="form-select"
          {...register("category")}
        >
          <option value="">Select Category</option>
          <option value="all">All Categories</option>

          {categories.map((category) => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Sub Category */}
      <div className="col-md-3">
        <select
          className="form-select"
          {...register("subCategory")}
          disabled={!subCategories.length}
        >
          <option value="">Select Sub Category</option>
          <option value="all">All Sub Categories</option>

          {subCategories
            .filter((sub) => sub.name)
            .map((sub) => (
              <option
                key={sub.id}
                value={sub.id}
              >
                {sub.name}
              </option>
            ))}
        </select>
      </div>

      {/* Sort */}
      <div className="col-md-3">
        <select
          className="form-select"
          {...register("sortDirection")}
        >
          <option value="">Sort By Price</option>
          <option value="asc">Low To High</option>
          <option value="desc">High To Low</option>
        </select>
      </div>

    
    </form>
  );
}
