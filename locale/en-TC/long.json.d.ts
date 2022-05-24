import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-TC';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;