const storeUrl = "http://localhost:3100/store";

const setKey = (key, value) => {
  console.log({ key, value });
  fetch(storeUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ key, value }),
  })
    .then((res) => res.json())
    .then((response) => {
      renderStoreKeys();
    });
};

const renderStoreKeys = () => {
  fetch(storeUrl, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((keys) => {
      const storeKeysContainer = document.getElementById("store-keys");

      if (!keys.length) {
        return (storeKeysContainer.innerText = "No keys in the store");
      }

      storeKeysContainer.innerHTML = "";

      keys.forEach((key) => {
        const badge = getBadgeElement(key);
        storeKeysContainer.appendChild(badge);
      });
    });
};

const showValue = (key) => {
  fetch(`${storeUrl}/${key}`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      console.log(response);

      alert(response.value);
    });
};

const getBadgeElement = (key) => {
  const badge = document.createElement("span");

  badge.innerText = key;
  badge.classList.add("badge", "bg-secondary", "mr-2", "mt-2");
  badge.onclick = () => showValue(key);

  return badge;
};

document.getElementById("set-key").addEventListener("click", () => {
  const key = document.getElementById("key").value;
  const value = document.getElementById("value").value;

  setKey(key, value);
});

window.onload = renderStoreKeys;
