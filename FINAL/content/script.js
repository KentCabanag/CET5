function zodiac() {
    const birthmonth = parseInt(document.getElementById("month").value);
    const birthday = parseInt(document.getElementById("day").value);
    const birthyear = parseInt(document.getElementById("year").value);
    const westernResultElement = document.getElementById("output");
    const chineseResultElement = document.getElementById("zodiac-output");
    const photoElement = document.getElementById("photo");
    const characteristicElement = document.getElementById("characteristic");
    const imageContainer = document.getElementById("image-container");
  
    const westernZodiacSigns = [
        {
            name: "Aquarius",
            startMonth: 1,
            startDay: 20,
            endMonth: 2,
            endDay: 18,
            imageUrl: "https://www.horoscope.com/images-US/signs/profile-aquarius.png",
            description: "Aquarians are extremely vulnerable and sensitive. Although you may often find them being surrounded by many friends but in reality they rarely have close friends and acquaintances. Aquarius is a universal sign which makes them public people. Hence Aquarians are often associated with clubs, organizations and forums and enthusiastically participate in intellectual discussions. Aquarians are great communicators as long as they are within their mental realm.Aquarians are extremely vulnerable and sensitive..."
          },
          {
            name: "Pisces",
            startMonth: 2,
            startDay: 19,
            endMonth: 3,
            endDay: 20,
            imageUrl: "https://www.horoscope.com/images-US/signs/profile-pisces.png",
            description: "Pisceans live in their imaginary world that barely has a connection with the reality. They love to look at the world through a rosy window. When challenged by reality, Pisceans have the tendency to retreat into their world of imagination."
          },
          {
            name: "Aries",
            startMonth: 3,
            startDay: 21,
            endMonth: 4,
            endDay: 19,
            imageUrl: "https://www.horoscope.com/images-US/signs/profile-aries.png",
            description: "Aries demonstrate strong personality. They have strong leadership qualities and honest and straightforward. Aries often have strong determination and can`t be deterred by failures.Aries are always eager for action. They take up to leadership spontaneously. But they don`t judge the pros and cons of a situation before acting. This also makes them vulnerable."
          },
          {
            name: "Taurus",
            startMonth: 4,
            startDay: 20,
            endMonth: 5,
            endDay: 20,
            imageUrl: "https://www.horoscope.com/images-US/signs/profile-taurus.png",
            description: "Taureans are noted for their determination and zeal. It is not easy to distract a Taurian from his goal once he has set his target. He would stay focused on his target and would continuously strive to achieve it.Taureans attach high value to simplicity and functionality. They often live a life that is simple and devoid of luxury."
          },
          {
            name: "Gemini",
            startMonth: 5,
            startDay: 21,
            endMonth: 6,
            endDay: 20,
            imageUrl: "https://www.horoscope.com/images-US/signs/profile-gemini.png",
            description: "Geminis are full of duality. They always look to a situation from dual perspective. Geminis are characterized by inconstancy and dual nature. Geminis therefore always stay confused about their feelings.Geminis however are strong communicators and express good control over language. They are often found to have knowledge over several languages."
          },
          {
            name: "Cancer",
            startMonth: 6,
            startDay: 21,
            endMonth: 7,
            endDay: 22,
            imageUrl: "https://www.horoscope.com/images-US/signs/profile-cancer.png",
            description: "Cancerians are emotional. Their lives are often inflicted with mood shifts. You can find a Canerian in different moods even during a day.The true emotion of Cancer however is hidden behind their composure. But they are soft creatures and can be hurt easily by unkind words.People of the Cancer zodiac sign can be prone to depression and other mental issues. However, cancers are great family people and enjoy big families around them."
          },
          {
            name: "Leo",
            startMonth: 7,
            startDay: 23,
            endMonth: 8,
            endDay: 22,
            imageUrl: "https://www.horoscope.com/images-US/signs/profile-leo.png",
            description: "Leos are warm spirited. They are full of energy and always eager to jump into action. Leos crave for recognition and admiration. Leos always love to be at the centre of attraction. They strive to reach to the top in whatever they do. Leos always love to be surrounded with large crowd and admirers. However, they are often unkind to criticism and don’t take the words of critics lightly.Leos are very ambitious and choose their acquaintances carefully. They aspire for social recognition."
          },
          {
            name: "Virgo",
            startMonth: 8,
            startDay: 23,
            endMonth: 9,
            endDay: 22,
            imageUrl: "https://www.horoscope.com/images-US/signs/profile-virgo.png",
            description: "Virgos Virgos have a keen sense of good and bad and for that they are highly discriminating. They have an intuitive sense to identify wrong motives in people. Hence, Virgos exercise extreme caution in what they do.The virgin defines purity and therefore they are endowed with the ability to distinguish the good from the bad. Hence, Virgos are also cleanliness freaks. Despite their intelligence Virgos often remain confused about the decisions they make in their life. Also, you will not find Virgos teeming with activities.have a keen sense of good and bad..."
          },
          {
            name: "Libra",
            startMonth: 9,
            startDay: 23,
            endMonth: 10,
            endDay: 22,
            imageUrl: "https://www.horoscope.com/images-US/signs/profile-libra.png",
            description: "Libra iLibra is an active sign and members born under the sign are endowed with high energy. But Librans also tend to run out of their energy soon.The Libra is the ‘balance’ and members of this sign have a very balanced mind. They can be found in settling disputes often. Librans always try to maintain harmony and balance. They are also very level headed and have a keen sense for justice. Therefore, their suggestions are often highly sought after by their friends and kins.Librans are two faceted characters. They both have the cheerfulness and darkness in them. Librans have phases of heightened activities but they can easily slip into a phases of complete inactivity and apathy as well.s an active sign and members born under the sign..."
          },
          {
            name: "Scorpio",
            startMonth: 10,
            startDay: 23,
            endMonth: 11,
            endDay: 21,
            imageUrl: "https://www.horoscope.com/images-US/signs/profile-scorpio.png",
            description: "Scorpions are most diverse in nature and therefore present the most interesting study. Scorpios hold grudge and would wait patiently for the right moment to strike. They are not likely to forget any act of betrayal or treachery. For Scorpios what is implied is more fascinating than the obvious.Scorpios are often described as egoists. However, some of the positive traits of Scorpios are- diplomacy, intuition, intelligence, engaging, resolute, spirituality and sensitivity.Scorpions are most diverse in nature..."
          },
          {
            name: "Sagittarius",
            startMonth: 11,
            startDay: 22,
            endMonth: 12,
            endDay: 21,
            imageUrl: "https://www.horoscope.com/images-US/signs/profile-sagittarius.png",
            description: "Sagittarians are the incurable optimists. They are always looking at the positive side of a thing. Their optimism can’t be dampened by hardships or negative results.Sagittarians often are outdoor people. They will take interest in all sorts of sports and outdoor activities. They are also adventures in nature. Although they are true to their faults but can also turn completely deaf to criticism and turn down suggestions.Sagittarians are the incurable optimists..."
          },
          {
            name: "Capricorn",
            startMonth: 12,
            startDay: 22,
            endMonth: 1,
            endDay: 19,
            imageUrl: "https://www.horoscope.com/images-US/signs/profile-capricorn.png",
            description: "Members of this sign has an insatiable desire to climb higher and during this course they can also become selfish and might not hesitate to sacrifice other's interests in fulfilling their goals.Capricorns may seem risk averse but in reality they carefully plan all their moves ahead and rehearse them to perfection."
          }
    ];
  
    const chineseZodiacSigns = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
  
    let westernZodiac = "unknown because you didn't put a valid date.";
    let chineseZodiac = "unknown because you didn't put a valid date.";
  
    imageContainer.style.display = "block";
  
    for (const sign of westernZodiacSigns) {
      if (
        (birthmonth == sign.startMonth && birthday >= sign.startDay) ||
        (birthmonth == sign.endMonth && birthday <= sign.endDay)
      ) {
        document.getElementById("picture").style.display = "none";
        westernZodiac = sign.name;
        photoElement.innerHTML = `<img src="${sign.imageUrl}" width="20%">`;
        characteristicElement.innerHTML = sign.description;
        break;
      }
    }
  
    const chineseZodiacIndex = (birthyear - 1900) % 12;
    chineseZodiac = chineseZodiacSigns[chineseZodiacIndex];
  
    if (birthmonth > 12 || birthday > 31 || birthyear < 1900) {
      alert("Please enter an accurate date!");
    } else if (birthmonth === 2 && birthday > 29) {
      alert("Please enter an accurate date!");
    }
  
    westernResultElement.innerHTML = `Western Zodiac: ${westernZodiac}`;
    chineseResultElement.innerHTML = `Chinese Zodiac: ${chineseZodiac}`;
  }
  
  function clearFields() {
    document.getElementById("month").value = "";
    document.getElementById("day").value = "";
    document.getElementById("year").value = "";
    document.getElementById("output").textContent = "";
    document.getElementById("zodiac-output").textContent = "";
    document.getElementById("characteristic").textContent = "";
    document.getElementById("photo").textContent = "";
    document.getElementById("picture").style.display = "block";
  }
  