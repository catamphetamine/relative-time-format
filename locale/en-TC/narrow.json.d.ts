import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-TC';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;