import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'no';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;