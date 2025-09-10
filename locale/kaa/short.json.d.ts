import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'kaa';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;