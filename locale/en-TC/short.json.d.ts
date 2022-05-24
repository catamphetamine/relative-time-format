import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-TC';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;