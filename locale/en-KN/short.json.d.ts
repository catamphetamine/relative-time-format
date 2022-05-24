import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-KN';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;