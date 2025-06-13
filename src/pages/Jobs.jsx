import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { clearAllJobErrors, fetchJobs } from "../store/slices/jobSlice";

const Jobs = () => {
  const [city, setCity] = useState("All");
  const [selectedCity, setSelectedCity] = useState("All");
  const [niche, setNiche] = useState("All");
  const [selectedNiche, setSelectedNiche] = useState("All");
  const [searchKeyword, setSearchKeyword] = useState("");

  const { jobs, loading, error } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  // Sanitize filter values for API
  const getSanitizedValue = (value) => (value === "All" ? "" : value);

  // Initial fetch
  useEffect(() => {
    dispatch(fetchJobs("", "", ""));
  }, [dispatch]);

  // Error handling
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllJobErrors());
    }
  }, [error, dispatch]);

  const handleCityChange = (value) => {
    setCity(value);
    setSelectedCity(value);
    dispatch(fetchJobs(getSanitizedValue(value), getSanitizedValue(niche), searchKeyword));
  };

  const handleNicheChange = (value) => {
    setNiche(value);
    setSelectedNiche(value);
    dispatch(fetchJobs(getSanitizedValue(city), getSanitizedValue(value), searchKeyword));
  };

  const handleSearch = () => {
    dispatch(fetchJobs(getSanitizedValue(city), getSanitizedValue(niche), searchKeyword));
  };

  const cities = [
    "All", "Delhi", "Ghaziabad", "Noida", "Rajisthan", "Faridabad", "Grugram",
    "Hyderabad", "Harayana", "Punjab", "Chandighar", "Meerut", "Banglore",
    "Channai", "Gujrat", "Bijnor", "Maharastra", "Dehradun", "Greater Noida",
    "West Bangole", "Andhra Predesh",
  ];

  const nichesArray = [
    "All", "Software Development", "Web Development", "Cybersecurity", "Data Science",
    "Artificial Intelligence", "Cloud Computing", "DevOps", "Mobile App Development",
    "Blockchain", "Database Administration", "Network Administration", "UI/UX Design",
    "Game Development", "IoT (Internet of Things)", "Big Data", "Machine Learning",
    "IT Project Management", "IT Support and Helpdesk", "Systems Administration",
    "IT Consulting",
  ];

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className="jobs">
          {/* Search Bar */}
          <div className="search-tab-wrapper">
            <input
              type="text"
              placeholder="Search by job title..."
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button onClick={handleSearch}>Find Job</button>
            <FaSearch />
          </div>

          <div className="wrapper">
            {/* Sidebar Filters */}
            <div className="filter-bar">
              <div className="cities">
                <h2>Filter Job By City</h2>
                {cities.map((city, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      id={city}
                      name="city"
                      value={city}
                      checked={selectedCity === city}
                      onChange={() => handleCityChange(city)}
                    />
                    <label htmlFor={city}>{city}</label>
                  </div>
                ))}
              </div>

              <div className="cities">
                <h2>Filter Job By Niche</h2>
                {nichesArray.map((niche, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      id={niche}
                      name="niche"
                      value={niche}
                      checked={selectedNiche === niche}
                      onChange={() => handleNicheChange(niche)}
                    />
                    <label htmlFor={niche}>{niche}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Dropdown Filter */}
            <div className="container">
              <div className="mobile-filter">
                <select
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                    setSelectedCity(e.target.value);
                    dispatch(fetchJobs(getSanitizedValue(e.target.value), getSanitizedValue(niche), searchKeyword));
                  }}
                >
                  <option value="All">Filter By City</option>
                  {cities.map((city, index) => (
                    <option value={city} key={index}>
                      {city}
                    </option>
                  ))}
                </select>

                <select
                  value={niche}
                  onChange={(e) => {
                    setNiche(e.target.value);
                    setSelectedNiche(e.target.value);
                    dispatch(fetchJobs(getSanitizedValue(city), getSanitizedValue(e.target.value), searchKeyword));
                  }}
                >
                  <option value="All">Filter By Niche</option>
                  {nichesArray.map((niche, index) => (
                    <option value={niche} key={index}>
                      {niche}
                    </option>
                  ))}
                </select>
              </div>

              {/* Job Cards */}
              <div className="jobs_container">
                {jobs && jobs.length > 0 ? (
                  jobs.map((element) => (
                    <div className="card" key={element._id}>
                      {element.hiringMultipleCandidates === "Yes" ? (
                        <p className="hiring-multiple">Hiring Multiple Candidates</p>
                      ) : (
                        <p className="hiring">Hiring</p>
                      )}
                      <p className="title">{element.title}</p>
                      <p className="company">{element.companyName}</p>
                      <p className="location">{element.location}</p>
                      <p className="salary">
                        <span>Salary:</span> Rs. {element.salary}
                      </p>
                      <p className="posted">
                        <span>Posted On:</span> {element.jobPostedOn.substring(0, 10)}
                      </p>
                      <div className="btn-wrapper">
                        <Link className="btn" to={`/post/application/${element._id}`}>
                          Apply Now
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <img
                    src="./notfound.png"
                    alt="job-not-found"
                    style={{ width: "100%" }}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Jobs;
