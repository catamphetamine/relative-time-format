import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'rw';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;