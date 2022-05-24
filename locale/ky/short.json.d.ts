import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ky';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;