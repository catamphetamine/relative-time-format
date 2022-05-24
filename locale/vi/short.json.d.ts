import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'vi';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;