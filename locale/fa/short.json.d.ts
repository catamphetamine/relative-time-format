import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'fa';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;