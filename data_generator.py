import requests
import time
import csv

def fetch_and_save_to_csv():
    all_rating_changes = []
   
    for j in range(1,10000):
        pager = 0
        print(j)        

        response = requests.get(f'https://codeforces.com/api/contest.ratingChanges?contestId={j}')
            
        if response.status_code != 200:
            continue

        rating_changes = response.json().get('result', [])

        if not rating_changes:
            continue
        sp=rating_changes[0]['contestName'][:16]
        sp1=rating_changes[0]['contestName'][:28]
        sp2=rating_changes[0]['contestName'][:17]
        if sp2=="Codeforces Global" or sp1=="Educational Codeforces Round" or sp=="Codeforces Round":
             pager=1
        else:
            continue
        for i in range(0,len(rating_changes)):
            rating_changes[i]["participant"]=rating_changes[-1]["rank"]
        
        all_rating_changes.extend(rating_changes)
        
        
        
            
        

    
    formatted_data = [
        {'rank': item['rank'],'oldRating': item['oldRating'], 'newRating': item['newRating'], 'participant': item['participant']}
        for item in all_rating_changes
    ]

    with open(f'contest_{j}_rating_changes.csv', 'w', newline='') as csvfile:
        fieldnames = ['rank','oldRating', 'newRating', 'participant']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

        writer.writeheader()
        writer.writerows(formatted_data)

if __name__ == "__main__":
    fetch_and_save_to_csv()
